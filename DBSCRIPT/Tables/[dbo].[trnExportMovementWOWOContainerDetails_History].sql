USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnExportMovementWOWOContainerDetails_History]    Script Date: 1/18/2024 9:56:59 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='[trnexportmovementWOContainerDetails_History]')
BEGIN
 DROP TABLE trnexportmovementWOContainerDetails_History
END
GO

CREATE TABLE [dbo].[trnExportMovementWOWOContainerDetails_History](
	[trnExportMovementWOWOContainerDetails_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportMovementWOWOContainerDetailsID] [int] NOT NULL,
	[trnExportMovementWOWOID] [int] NULL,
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
	[UpdatedDate] [datetime] NULL,
	[Caption] [varchar](255) NULL
) ON [PRIMARY]
GO


