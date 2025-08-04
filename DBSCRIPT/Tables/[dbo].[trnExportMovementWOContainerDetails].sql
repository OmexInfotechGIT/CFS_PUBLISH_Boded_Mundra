USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnExportMovementWOContainerDetails]    Script Date: 1/18/2024 9:48:34 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnexportmovementWOContainerDetails')
BEGIN
 DROP TABLE trnexportmovementWOContainerDetails
END
GO

CREATE TABLE [dbo].[trnExportMovementWOContainerDetails](
	[trnExportMovementWOContainerDetailsID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportMovementWOID] [bigint] NOT NULL,
	[trnexportstufingwoContainerDetailsID] [bigint] NOT NULL,
	[ContainerNo] [varchar](50) NULL,
	[VCNID] [bigint] NOT NULL,
	[VCNNo] [varchar](255) NULL,
	[VesselName] [varchar](255) NULL,
	[VOYNo] [varchar](255) NULL,
	[CutoffDate] [varchar](255) NULL,
	[PortLocation] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExportMovementWOContainerDetails] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExportMovementWOContainerDetails] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


