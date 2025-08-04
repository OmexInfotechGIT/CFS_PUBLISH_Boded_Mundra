USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnExportMovementWO]    Script Date: 1/18/2024 9:48:14 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnexportmovementWO')
BEGIN
 DROP TABLE [dbo].[trnexportmovementWO]
END
GO

CREATE TABLE [dbo].[trnExportMovementWO](
	[trnExportMovementWOID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportMovementWOPrefix] [varchar](50) NULL,
	[trnExportMovementWONo] [varchar](5) NULL,
	[SearchType] [varchar](5) NOT NULL,
	[SearchID] [bigint] NOT NULL,
	[SearchNo] [varchar](255) NOT NULL,
	[StuffRequestNo] [varchar](255) NULL,
	[VCNNo] [varchar](255) NULL,
	[VCNID] [bigint] NOT NULL,
	[VOYNo] [varchar](255) NULL,
	[PortLocation] [varchar](255) NULL,
	[ExportInvoiceNo] [varchar](255) NULL,
	[Remarks] [varchar](max) NULL,
	[TransportationType] [varchar](5) NULL,
	[Transporter] [varchar](255) NULL,
	[TransporterID] [int] NULL,
	[CancelRemarks] [varchar](max) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[IsFinished] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[IsApproved] [bit] NOT NULL,
	[ApproveRemarks] [varchar](255) NULL,
	[UnApproveRemarks] [varchar](255) NULL,
	[ApprovedDate] [datetime] NULL	
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExportMovementWO] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExportMovementWO] ADD  DEFAULT ((0)) FOR [IsFinished]
GO

ALTER TABLE [dbo].[trnExportMovementWO] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnExportMovementWO] ADD  DEFAULT ((0)) FOR [IsApproved]
GO


