USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnExportStufingWOContainerDetails]    Script Date: 1/12/2024 12:21:12 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnexportstufingwoContainerDetails')
BEGIN
 DROP TABLE trnexportstufingwoContainerDetails
END
GO


CREATE TABLE [dbo].[trnExportStufingWOContainerDetails](
	[trnExportStufingWOContainerDetailsID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportStufingWOID] [int] NULL,
	[ContainerName] [varchar](max) NOT NULL,
	[trnEmptyContainerGateInDetailsID] [int] NOT NULL,
	[Size] [varchar](max) NULL,
	[Type] [varchar](max) NULL,
	[StuffingMode] [varchar](max) NULL,
	[NoOfPackageForContainer] [decimal](18, 2) NULL,
	[WeightForContainer] [decimal](18, 2) NULL,
	[NoOfPiecesForContainer] [decimal](18, 2) NULL,
	[CLPStatus] [varchar](max) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[trnExportStufingWOContainerDetailsID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExportStufingWOContainerDetails] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExportStufingWOContainerDetails] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


